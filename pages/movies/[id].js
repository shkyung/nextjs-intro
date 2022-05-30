import {useRouter} from "next/router";

export default function Detail() {
    const router = useRouter()
    console.error("router.query ", router.query)
    return (
        <div>
        <h4>{router.query.title || "loading"}</h4>
        </div>
    )
}