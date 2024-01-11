interface Props {
  title: string
  icon: any
  content: any
}

const Item: React.FC<Props> = ({ title, icon, content }) => {
  return (
    <div>
      <div className="flex gap-2 text-primary text-xl items-center md:text-2xl ">
        {title}
        <span>{icon}</span>
      </div>
      <h1 className="xl:text-xl  ">{content}</h1>
    </div>
  )
}

export default Item
