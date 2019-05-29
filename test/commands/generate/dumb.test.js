const {expect, test} = require('@oclif/test')

describe('generate:dumb', () => {
  test
  .stdout()
  .command(['generate:dumb'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['generate:dumb', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
