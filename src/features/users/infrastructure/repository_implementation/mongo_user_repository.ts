import { User } from "../../domain/entities/user";
import { UserRepository } from "../../domain/repositories/user_repository";
import UserModel from "../models/user.schema";

export class MongoUserRepository implements UserRepository {
  public signIn = async (email: string): Promise<any> => {
    const userSignIn = await UserModel.findOne({ email: email });
    return userSignIn;
  };

  public create = async (user: User): Promise<any> => {
    const userCreated = await UserModel.create(user);
    return userCreated;
  };

  public get = async (uuid: string): Promise<any> => {
    const userGeted = await UserModel.findById(uuid);
    return userGeted;
  };

  public update = async (uuid: string, user: User): Promise<any> => {
    const userUpdated = await UserModel.findByIdAndUpdate(uuid, user, {
      new: true,
    });
    return userUpdated;
  };

  public delete = async (uuid: string): Promise<any> => {
    const userDeleted = await UserModel.findByIdAndDelete(uuid);
    return userDeleted;
  };

  public find = async (): Promise<any> => {
    const userList = await UserModel.find().sort({ createdAt: -1 });
    return userList;
  };
}
