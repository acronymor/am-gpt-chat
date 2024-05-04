import {Column, Entity, JoinColumn, ManyToOne, ValueTransformer} from "typeorm";
import {BaseEntity} from "@/app/entities/base-impl";
import {type Config, IWorkflow} from "@/app/entities/workflow";
import {UserImpl} from "@/app/entities/user-impl";


class ConfigTransformer implements ValueTransformer {
    to(value: Config) {
        return JSON.stringify(value)
    }

    from(value: string) {
        return JSON.parse(value) as Config
    }
}

@Entity({name: "t_workflow"})
export class WorkflowImpl extends BaseEntity implements IWorkflow {
    @JoinColumn({name: "user_id"})
    @ManyToOne(() => UserImpl, (user) => user.id)
    user: UserImpl

    @Column({name: "name"})
    name: string;


    @Column({name: "config", type: "varchar", transformer: new ConfigTransformer()})
    config: Config;
}