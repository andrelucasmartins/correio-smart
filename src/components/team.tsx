const people = [
  {
    name: "André Ezequiel",
    role: "Architect / COO",
    imageUrl: "https://github.com/andrelucasmartins.png?raw=true",
  },
  {
    name: "Caio",
    role: "Co-Founder / CEO",
    imageUrl: "https://github.com/lesliealexander.png?raw=true",
  },
  {
    name: "David",
    role: "Co-Founder / CFO",
    imageUrl: "https://github.com/lesliealexander.png?raw=true",
  },
  {
    name: "Diego",
    role: "Product Designer / CPO",
    imageUrl: "https://github.com/lesliealexander.png?raw=true",
  },
  {
    name: "Matheus",
    role: "Product Designer / CMO",
    imageUrl: "https://github.com/lesliealexander.png?raw=true",
  },
];

export default function Team() {
  return (
    <div className="bg-indigo-50 py-24 sm:py-32 w-full" id="team">
      <div className="mx-auto grid max-w-screen-lg gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            Growth Intelligence Team
          </h2>
          <p className="mt-6 text-md leading-8 text-gray-600">
            The Growth Intelligence team is made up of specialists dedicated to
            to strategic growth and innovation. We combine skills in data
            analysis, digital marketing and software development to drive the
            success of our projects and achieve exceptional results.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-2 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt={person.name}
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
