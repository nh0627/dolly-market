class ControllerBase {
  constructor(RepositoryClass) {
    this.repository = new RepositoryClass()
  }

  // Todo: res를 꼭 argument로 받아야 하는지
  ok(res, data) {
    res.json(data)
  }

  created(res, data) {
    res.status(201).json(data)
  }

  noContent(res) {
    res.status(204).send()
  }
}

export default ControllerBase
