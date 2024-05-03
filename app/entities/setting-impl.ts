import {Column, Entity, JoinColumn, ManyToOne, ValueTransformer} from "typeorm";
import {BaseEntity} from "@/app/entities/base-impl";
import {UserImpl} from "@/app/entities/user-impl";
import {type Config, ISetting} from "@/app/entities/setting";

class GenericTransformer implements ValueTransformer {
    to(value: Config) {
        return JSON.stringify(value)
    }

    from(value: string) {
        return JSON.parse(value) as Config
    }
}


@Entity({name: "t_setting"})
export class SettingImpl extends BaseEntity implements ISetting {
    @JoinColumn({name: "user_id"})
    @ManyToOne(() => UserImpl, (user) => user.id)
    user: UserImpl

    @Column({name: "config", type: "varchar", transformer: new GenericTransformer()})
    config: Config
}
