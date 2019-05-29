const {expect, test} = require('@oclif/test')

describe('generate:mui', () => {
  test
  .stdout()
  .command(['generate:mui'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['generate:mui', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
