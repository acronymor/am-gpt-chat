import {DragDropContext, Draggable, Droppable, OnDragEndResponder,} from "@hello-pangea/dnd";

import {ChatItem} from "@/app/ui/unit/chat-item";
import {IconLink} from "@/app/ui/lib/link";
import {useState} from "react";

type MetaChatItem = {
    name: string,
    cnt: number,
    href: string
}

const links: MetaChatItem[] = [
    {name: 'titleA', cnt: 1001, href: '/ui/unit/chat/1'},
    {name: 'titleB', cnt: 1002, href: '/ui/unit/chat/2'},
    {name: 'titleC', cnt: 1003, href: '/ui/unit/chat/3'},
]

const reorder = (list: MetaChatItem[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

export function ChatList(props: { narrow?: boolean }) {
    const [chats, setChats] = useState(links)

    const onDragEnd: OnDragEndResponder = (result) => {
        const {destination, source} = result;
        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        setChats(reorder(chats, source.index, destination.index))
    };

    return (<DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="chat-list">
            {(provided) => (
                <div className={"chat-list"} {...provided.droppableProps} ref={provided.innerRef}>
                    {chats.map((chat, index) => (
                        <Draggable key={chat.name} draggableId={chat.name} index={index}>
                            {(provided) => (
                                <div ref={provided.innerRef}
                                     {...provided.draggableProps}
                                     {...provided.dragHandleProps} >
                                    <IconLink key={chat.name} href={chat.href}>
                                        <ChatItem title={chat.name} cnt={chat.cnt}/>
                                    </IconLink>
                                </div>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    </DragDropContext>)
}