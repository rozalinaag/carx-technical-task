type Props = {
  ticket: { id: number; name: string };
};

export default function Ticket({ ticket }: Props) {
  return <div>{ticket.name}</div>;
}
