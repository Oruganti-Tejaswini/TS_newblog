import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User', {
  name: g.string().length({min:2, max:20}),
  email: g.string().unique(),
  avatarURL: g.url(),
  description:g.string(),
  githubURL:g.url().optional(),
  linkedinURL:g.url().optional(),
  projects:g.relation(()=>Project).list().optional(),
})

const Project = g.model("Project", {
  title:g.string().length({min:3}),
  description:g.string(),
  image:g.url(),
  livesiteURL:g.url().optional(),
  githuburl:g.url().optional(),
  category:g.string().search(),
  createdBy:g.relation(()=>User),

})


export default config({
  schema: g

})
