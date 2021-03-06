export default function({contact}) {
  return <div id="model-json-view">
    <header>
      <h3>Contact Model JSON View</h3>Load sample data:<a href="javascript:void(0);" data-sample="michael">Michael, </a>
      <a href="javascript:void(0);" data-sample="mark">Mark, </a>
      <a href="javascript:void(0);" data-sample="mason">Mason</a>
    </header>
    <pre><code>{JSON.stringify(contact.toJSON(), null, '  ')}</code></pre>
  </div>
}