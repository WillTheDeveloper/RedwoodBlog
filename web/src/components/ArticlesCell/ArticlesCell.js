import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      title
      body
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ articles }) => {
  return (
    <>
      <div className="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Recent posts
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              View some of the latest creations that people have done!
            </p>
          </div>
          <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {articles.map((article) => (
              <div key={article.title}>
                <Link to={routes.article()}>{article.title}</Link>
                <p className="mt-3 text-base text-gray-500">{article.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
