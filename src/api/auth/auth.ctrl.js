import Joi from 'joi';
import User from '../../model/user';

export const register = async ctx => {
  const schema = Joi.object().keys({
    name: Joi.string().min(2).required(),
    id: Joi.string().min(6).required(),
    password: Joi.string().min(8).required(),
    nickname: Joi.string().min(3).required(),
  });

  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400; // Bad request
    ctx.body = result.error;
    return;
  }
  const { name, id, password, nickname } = ctx.request.body;

  try {
    const idExist = await User.findOne({ id });
    const nicknameExist = await User.findOne({ nickname });

    if (idExist || nicknameExist) {
      ctx.status = 409; // conflict
      return;
    }

    const user = new User({
      name,
      id,
      password,
      nickname,
    });
    await user.setPassword(password); // 비밀번호 설정
    await user.save(); // 데이터베이스에 저장

    // ctx.status = 200 생략되었다고 생각 200 번대는 오류없이 성공
    ctx.body = user.serialize(); // ctx.body = ctx.respone.body
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const login = async ctx => {
  const { id, password } = ctx.request.body;

  // id와 password가 없으면 에러처리
  if (!id || !password) {
    ctx.status = 400; // Bad request
    return;
  }

  try {
    const user = await User.findById(id);
    // 계정이 존재하지 않으면 에러처리
    if (!user) {
      ctx.status = 401; // unauthorized
      return;
    }
    const valid = await user.checkPassword(password);

    // 잘못된 비밀번호
    if (!valid) {
      ctx.status = 401; // unauthorized
      return;
    }
    ctx.body = user.serialize(); // 비밀번호 암호화
  } catch (e) {
    ctx.throw(500, e);
  }
};
