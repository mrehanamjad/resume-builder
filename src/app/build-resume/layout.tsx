import Protected from "@/components/Protected";

function BuildResumeLayout({children}:{children:React.ReactNode}) {
  return (
    <Protected>{children}</Protected>
  )
}

export default BuildResumeLayout