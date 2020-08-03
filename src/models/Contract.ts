
import { Document, Schema, model } from 'mongoose';

export interface Contract {
    message_id: string;
    name: string;
    description: string;
    reward: string;
}

const ContractSchema = new Schema({
    message_id: String,
    name: String,
    description: String,
    reward: String
}, {
    timestamps: true,
});

export interface IContractModel extends Contract, Document {}
export const UserModel = model<IContractModel>('Contract', ContractSchema);
export default UserModel;