import {DataTypes, Model} from 'sequelize';

export default class DoctorSpecialty extends Model  {
    public id!: number;
    public doctor_id!: number;
    public specialty_id!: number;
    
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    public static attributes(): Object{
        return {
            doctor_id: {
                type: DataTypes.INTEGER,
            },
            specialty_id: {
                type: DataTypes.INTEGER,
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
