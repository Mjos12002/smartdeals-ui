// About is used to display the about page of the application.
export default function About(){
    return (
        <div className="h-screen overflow-y-scroll flex justify-center items-center bg-[#F0F0F0] p-2">
            <div className="bg-white w-full max-w-2xl h-screen rounded-lg shadow-md border border-[#C6C3C3]">
                <h2>About us</h2>
                <p>Welcome to our about page!</p>
            </div>
        </div>
    )
}