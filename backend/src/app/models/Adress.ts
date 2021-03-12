import {DataTypes, Model} from 'sequelize';

export default class Adress extends Model  {
    public id!: number;
    public cep!: number;
    public street!: string;
    public district!: string;
    public state!: string;
    public city!: string;
    public complement!: string;
   
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    public static attributes(): Object{
        return {
            cep: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            street: {
              type: DataTypes.STRING,
            },
            district: {
              type: DataTypes.STRING,
            },
            state: {
              type: DataTypes.STRING,
            },
            city: {
              type: DataTypes.STRING,
            },
            complement: {
              type: DataTypes.STRING,
            },
            created_at: {
              type: DataTypes.DATE,
            },
            updated_at: {
              type: DataTypes.DATE,
            }
        }
    }

}
