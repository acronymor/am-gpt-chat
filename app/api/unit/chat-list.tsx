import {DragDropContext, Draggable, Droppable, OnDragEndResponder,} from "@hello-pangea/dnd";

import {ChatItem} from "@/app/api/unit/chat-item";
import {IconLink} from "@/app/api/unit/link";
import {useState} from "react";

const links = [
    {name: 'title1', href: `/api/unit/chat/1`},
    {name: 'title2', href: '/api/unit/chat/2'},
    {name: 'title3', href: '/api/unit/chat/3'},
]

const reorder = (list: { name: string, href: string }[], startIndex: number, endIndex: number) => {
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
                                        <ChatItem title={chat.name}/>
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