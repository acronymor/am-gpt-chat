import {Column, Entity, JoinColumn, ManyToOne, ValueTransformer} from "typeorm";
import {BaseEntity} from "@/app/entities/base-impl";
import {UserImpl} from "@/app/entities/user-impl";
import {IProvider, type LlmConfig, ModelType} from "@/app/entities/provider";

class LLMTransformer implements ValueTransformer {
    to(value: LlmConfig) {
        return JSON.stringify(value)
    }

    from(value: string) {
        return JSON.parse(value) as LlmConfig
    }
}

class ModelTypeTransformer implements ValueTransformer {
    to(value: ModelType) {
        return value.toString()
    }

    from(value: string) {
        return value as ModelType
    }
}

@Entity({name: "t_provider"})
export class ProviderImpl extends BaseEntity implements IProvider {
    @JoinColumn({name: "user_id"})
    @ManyToOne(() => UserImpl, (user) => user.id)
    user: UserImpl

    @Column({name: "provider_name"})
    providerName: string;

    @Column({name: "model_name"})
    modelName: string;

    @Column({type: "varchar", name: "model_type", transformer: new ModelTypeTransformer()})
    modelType: ModelType;

    @Column({type: "varchar", transformer: new LLMTransformer()})
    config: LlmConfig
}
