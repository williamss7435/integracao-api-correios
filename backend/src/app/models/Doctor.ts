import {DataTypes, Model} from 'sequelize';

export default class Doctor extends Model  {
    public id!: number;
    public name!: string;
    
    public crm!: number;
    public phone!: number;
    public cell_phone!: number;
    public adress_id!: number;
    public deleted_at!: Date;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    public static attributes(): Object{
        return {
          name: {
            type: DataTypes.STRING,
          },
          crm: {
            type: DataTypes.INTEGER,
          },
          phone: {
            type: DataTypes.INTEGER,
          },
          cell_phone: {
            type: DataTypes.INTEGER,
          },
          adress_id: {
            type: DataTypes.INTEGER,
          },
          deleted_at: {
            type: DataTypes.INTEGER,
          },
          created_at: {
            type: DataTypes.DATE,
          },
          updated_at: {
            type: DataTypes.DATE,
          },
        }
    }

}
