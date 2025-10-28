import { auth, currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {

    const authObj=await auth()
    const user=await currentUser()  // these 2 helpers are useful in server components and route handlers but do not work in client components. In the client component we can read the same data using useAuth and useUser hooks

    console.log("authObj:",authObj);
    console.log("currentUser:",user);
    
    
  return <h1>Welcome to the Dashboard</h1>;
}