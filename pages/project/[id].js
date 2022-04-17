import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ProjectsBlogs } from "@/data/project-blogs";
import Error from "next/error";
import { ProjectBlog } from '@/components/project-blog';

const ProjectPost = () => {
    const router = useRouter();
    const [project, setProject] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {
        if (router && router.query) {
            const project_id = router.query.id;
            let index = ProjectsBlogs.findIndex(
                ({ id }) => id == project_id
            )
            if (index == -1) {
                setError(true)
                console.log('this doesnt exist', index)
            } else {
                setError(false)
                setProject(ProjectsBlogs[index])
                console.log(ProjectsBlogs[index])
            }

        }
    }, [router])

    return (
        error ? <Error title="Project with this id is not found" statusCode={404} /> :
            <ProjectBlog project={project} />
    )
}
export default ProjectPost