import {DragDropContext, Draggable, Droppable, OnDragEndResponder,} from "@hello-pangea/dnd";

import {ChatItem} from "@/app/ui/unit/chat-item";
import {IconLink} from "@/app/ui/lib/link";
import {useChatStore} from "@/app/store/chat";


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
                        <Draggable key={chat.id} draggableId={chat.id} index={index}>
                            {(provided) => (
                                <div ref={provided.innerRef}
                                     {...provided.draggableProps}
                                     {...provided.dragHandleProps} >
                                    <IconLink key={chat.id} href={{pathname: `/ui/unit/chat/${index}`}}>
                                        <ChatItem key={chat.id}
                                                  id={chat.id}
                                                  index={index}
                                                  title={chat.topic}
                                                  selected={index === selectedIndex}
                                                  cnt={chat.messages.length}
                                                  time={new Date(0).toLocaleTimeString()}
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