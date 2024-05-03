import {Column, Entity, ValueTransformer} from "typeorm";
import {BaseEntity} from "@/app/entities/base-impl";
import {IUser} from "@/app/entities/user";

class CryptoTransformer implements ValueTransformer {
    to(value: any) {
        console.log("encrypt", value)
        return value
    }

    from(value: string) {
        console.log("decrypt", value)
        return value
    }
}

@Entity({name: "t_user"})
export class UserImpl extends BaseEntity implements IUser {
    @Column({name: "password", transformer: new CryptoTransformer()})
    password: string;

    @Column({name: "name"})
    name: string;

    @Column({name: "email"})
    email: string;

    @Column({name: "avatar"})
    avatar: string;
}
