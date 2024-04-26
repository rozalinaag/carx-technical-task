'use client';
import BreadCrumbs from '@/shared/ui/BreadCrumbs/BreadCrumbs';
import css from './styles.module.css';
import { useEffect, useState } from 'react';
import { useStores } from '@/shared/hooks/useStore';
import { Ticket as TicketType } from '../types';
import Ticket from '@/shared/ui/Ticket/Ticket';
import { CommentLine } from '@/shared/ui/CommentLine/CommentLine';
import FormComment from '@/app/comments/FormComment/FormComment';
import { observer } from 'mobx-react-lite';

type Props = {
  params: { ticketId: string };
};

const TicketId = observer(({ params }: Props) => {
  const [ticket, setTicket] = useState<TicketType>();
  const {
    tickets: { getOneTicket },
    comments: {
      commentsByTicketId,
      getCommentsByIdTicket,
      pushNewCommentAction,
    },
  } = useStores();

  useEffect(() => {
    setTicket(getOneTicket(params.ticketId));
    getCommentsByIdTicket(params.ticketId);
  }, [getOneTicket, params.ticketId, getCommentsByIdTicket]);

  return (
    <div className={css.wrapper}>
      <BreadCrumbs>История запроса</BreadCrumbs>

      {!ticket && <div>Loading...</div>}

      <div className="flex flex-col gap-10">
        {ticket && <Ticket link={false} ticket={ticket} />}

        {commentsByTicketId && (
          <div className="ticket">
            <div className="title">Комментарии:</div>

            <div>
              {commentsByTicketId.map((item) => (
                <CommentLine
                  key={item.id}
                  data={item.data}
                  userName={item.user.name}
                  text={item.text}
                />
              ))}
            </div>

            {!ticket?.isClosed ? (
              <FormComment
                idTicket={params.ticketId}
                pushNewComment={pushNewCommentAction}
              />
            ) : (
              <CommentLine
                data={ticket.dataClose}
                userName={'Техническая поддержка'}
                text={'История закрыта'}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
});

export default TicketId;
