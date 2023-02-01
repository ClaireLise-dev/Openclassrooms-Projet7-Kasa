import classes from './tags.module.css'

function Tags(props) {
  let tags = props.tags
  return (
    <div className={classes.Tags}>
      {tags.map((tag, index) => {
        return (
          <span key={index} className={classes.SingleTag}>
            {tag}{' '}
          </span>
        )
      })}
    </div>
  )
}

export default Tags
