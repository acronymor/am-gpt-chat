import {Column, Entity, ValueTransformer} from "typeorm";
import {BaseEntity} from "@/app/entities/base-impl";
import {type Config, type Context, IWorkflow} from "@/app/entities/workflow";

class ContextTransformer implements ValueTransformer {
    to(value: Context) {
        console.log("context", value)
        return value
    }

    from(value: string) {
        console.log("context", value)
        return JSON.parse(value) as Context
    }
}

class ConfigTransformer implements ValueTransformer {
    to(value: Config) {
        console.log("config", value)
        return value
    }

    from(value: string) {
        console.log("config", value)
        return JSON.parse(value) as Config
    }
}

@Entity({name: "t_workflow"})
export class WorkflowImpl extends BaseEntity implements IWorkflow {
    @Column({name: "name"})
    name: string;

    @Column({name: "context", type: "varchar", transformer: new ContextTransformer()})
    context: Context;

    @Column({name: "config", type: "varchar", transformer: new ConfigTransformer()})
    config: Config;

}