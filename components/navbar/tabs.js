
const tabsFactory = (data) => {
    console.log(data)
    switch (data) {
        case 'about':
            return <>about</>
            break;
        case 'projects':
            return (
                <div className="w-1/3 h-full bg-Black text-white p-6">
                    Projects
                </div>
            )
            break;
        case 'contact':
            return <>contact</>
            break;
    }
}
export default tabsFactory;