import { Metadata } from "next"

// Đảm bảo tên biến là `metadata`, viết thường
export const metadata: Metadata = {
  title: "User Detail",
}

export default function UserDetail({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <nav></nav>
      {children}
    </section>
  )
}
