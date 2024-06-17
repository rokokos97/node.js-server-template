import userModel from '../models/user.js';
import { IUser, IUserInput } from '../interfaces';
import usersMock from '../mock/users.json' assert { type: 'json' };
import { handleError } from '../utils/handleError.js';

const usersMockType: IUserInput[] = usersMock as IUserInput[];
export const initialDataBase = async () => {
  const users: IUser[] = await userModel.find();
  if (users.length !== usersMockType.length) {
    await createInitialEntity(userModel, usersMockType);
  }
};

async function createInitialEntity(
  Model: typeof userModel,
  data: IUserInput[],
): Promise<(IUser | string)[]> {
  await Model.collection.drop();
  return Promise.all(
    data.map(async (item) => {
      try {
        delete item._id;
        const newItem = new Model(item);
        await newItem.save();
        return newItem;
      } catch (error) {
        return handleError(error);
      }
    }),
  );
}
