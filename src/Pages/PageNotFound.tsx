import {Link} from 'react-router-dom'
import {motion} from "framer-motion"
import { PageVariants } from './About'
const PageNotFound = () => {
  return (
    <motion.div className="not-found"
    variants={PageVariants}
    initial="initial"
    animate="visible">
        <p>Sorry, the page you were looking for was not found.</p>
        <Link to= "/" className='back'>Return to home</Link>
    </motion.div>
  )
}

export default PageNotFound