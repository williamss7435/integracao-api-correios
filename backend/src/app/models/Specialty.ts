import {DataTypes, Model} from 'sequelize';

export default class Specialty extends Model  {
    public id!: number;
    public description!: string;
    
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    public static attributes(): Object{
        return {
            description: {
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
