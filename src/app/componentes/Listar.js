import Link from "next/link";

export default async function Listar({users}){
    await new Promise((resolve) => setTimeout(resolve,3000));
    return(
        <div className="usuarios">
            {users?.map((user, index) =>
              <p key={index}>
                <Link href={`/pages/alterar/${user.id}`}>
                    <div className="mb-2">
                        <image
                        width={300}
                        height={300}
                        src=""
                        alt={user.name}
                        className=""
                       />
                    </div>
                   <h2 className=""> {user.nome}</p></h2>
                </Link>
                
            )}
        </div>
    )
}