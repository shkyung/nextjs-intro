import {useRouter} from "next/router";
import SEO from '../../components/SEO'

export default function Detail({params}) {
    const router = useRouter()
    console.error("router.query ", router.query)
    const [title, id] = params
    return (<div>
            <SEO title={title}/>
            <h4>{title}</h4>
        </div>)
}

export function getServerSideProps({params: {params}}) {
    console.error("params!! ", params)
    return {
        props: {params}
    }
}