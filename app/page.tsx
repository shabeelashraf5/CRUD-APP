// import CrudApp from "./components/CrudApp";

// export default function Home() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <CrudApp />
//     </div>
//   )
// }

import { redirect } from "next/navigation";

export default function Home() {
  redirect("/crud-app"); // Redirect to login when user visits "/"
}
