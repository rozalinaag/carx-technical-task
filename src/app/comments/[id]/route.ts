import { comments } from '../data';

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const comment = comments.find((item) => item.id === parseInt(params.id));

  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { text } = body;

  const indexComment = comments.findIndex(
    (item) => item.id === parseInt(params.id)
  );

  comments[indexComment].text = text;

  return Response.json(comments[indexComment]);
}

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const indexComment = comments.findIndex(
    (item) => item.id === parseInt(params.id)
  );
  const deletedComment = comments[indexComment]
  comments.splice(indexComment, 1)

  return Response.json(deletedComment);
}
