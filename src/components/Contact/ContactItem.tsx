interface Props {
  icon: any
  title: string
  content: any
}

const ContactItem: React.FC<Props> = ({ icon, title, content }) => {
  return (
    <div className="relative bg-neutral-800 w-72 h-36  my-0 mx-auto  flex items-center justify-center rounded-2xl">
      {icon}

      <div className="flex flex-col  justify-center text-center text-xl">
        <h1 className="text-neutral-400">{title}</h1>
        {content}
      </div>
    </div>
  )
}

export default ContactItem
