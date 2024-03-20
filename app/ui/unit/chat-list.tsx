import {DragDropContext, Draggable, Droppable, OnDragEndResponder,} from "@hello-pangea/dnd";

import {ChatItem} from "@/app/ui/unit/chat-item";
import {IconLink} from "@/app/ui/lib/link";
import {useChatStore} from "@/app/store/chat";

type MetaChatItem = {
    name: string,
    cnt: number,
    href: string
}

const reorder = (list: MetaChatItem[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

export function ChatList(props: { narrow?: boolean }) {
    const [sessions, selectedIndex, selectSession, moveSession, deleteSession] = useChatStore(
        (state) => [
            state.sessions,
            state.currentSessionIndex,
            state.selectSession,
            state.moveSession,
            state.deleteSession
        ],
    );

    const onDragEnd: OnDragEndResponder = (result) => {
        const {destination, source} = result;
        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        moveSession(source.index, destination.index);
    };

    return (<DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="chat-list">
            {(provided) => (
                <div className={"chat-list"} {...provided.droppableProps} ref={provided.innerRef}>
                    {sessions.map((chat, index) => (
                        <Draggable key={chat.topic} draggableId={chat.topic} index={index}>
                            {(provided) => (
                                <div ref={provided.innerRef}
                                     {...provided.draggableProps}
                                     {...provided.dragHandleProps} >
                                    <IconLink key={chat.topic} href={{
                                        pathname: `/ui/unit/chat/${index}`,
                                        query: {title: chat.topic, cnt: chat.messages.length}
                                    }}>
                                        <ChatItem key={chat.id}
                                                  title={chat.topic}
                                                  cnt={chat.messages.length}
                                                  time={new Date(chat.lastUpdate).toLocaleTimeString()}
                                                  onClick={() => {
                                                      selectSession(index)
                                                  }}
                                                  onDelete={() => {
                                                      deleteSession(index)
                                                  }}
                                        />
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