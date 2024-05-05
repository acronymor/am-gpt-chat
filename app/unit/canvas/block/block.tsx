import {memo, useCallback, useMemo} from "react";
import {Block as BlockType, BLOCK_CLASSIFICATIONS, BLOCKS} from "@/app/unit/canvas/block/constants";
import {NodeEnum, ToolDefaultValue} from "@/app/unit/canvas/node/base/types";
import {BlockClassificationEnum} from "@/app/unit/canvas/block/types";

type BlocksProps = {
    searchText: string
    onSelect: (type: NodeEnum, tool?: ToolDefaultValue) => void
    availableBlocksTypes?: NodeEnum[]
}

const Block = ({searchText, onSelect, availableBlocksTypes = [],}: BlocksProps) => {
    const groups = useMemo(() => {
        return Object.groupBy(BLOCKS, (block: BlockType) => block.classification);
    }, [BLOCKS, searchText, availableBlocksTypes])

    const isEmpty = Object.values(groups).every(list => !list.length)

    const renderGroup = useCallback((classification: BlockClassificationEnum) => {
        const list = groups[classification] ?? []

        return (
            <div key={classification}>
                {
                    !!list && (
                        <div style={{
                            fontSize: "12px",
                            color: "red"
                        }}>
                            {`workflow.tabs.${classification}`}
                        </div>
                    )
                }
                {
                    list.map(block => (
                        <div key={block.type} style={{fontSize: "14px", cursor: "pointer", color: "blue"}}
                             onClick={() => onSelect(block.type)}
                        >{block.title}</div>
                    ))
                }
            </div>
        )
    }, [groups, onSelect])

    return (
        <div className={"block"}>
            {!isEmpty && BLOCK_CLASSIFICATIONS.map(renderGroup)}
        </div>
    )
}

export default memo(Block)
