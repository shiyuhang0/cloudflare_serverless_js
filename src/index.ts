import { connect } from '@tidbcloud/serverless'

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const conn = connect({url:"mysql://4BQqyzqxmQm67e1.root:xxx@gateway01.us-east-1.dev.shared.aws.tidbcloud.com:4000/test"})
		const result = await conn.execute('show databases')
    console.log(result)
		return new Response(JSON.stringify(result))
	},
};
