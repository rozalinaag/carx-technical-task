import { comments } from "./data"
import { CommentType } from "./types"

export async function GET() {
  return Response.json(comments)
} 

export async function POST(request: Request) {
  const requestComment = await request.json()

  const newComment: CommentType = {
    id: comments.length + 1,
    idTicket: requestComment.idTicket,
    text: requestComment.text,
    userName: requestComment.userName
  }

  comments.push(newComment)

  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201
  })
}