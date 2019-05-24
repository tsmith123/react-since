# React-since
A tiny component for those needing "humanistic" outputs rather than "to-the-second" accuracy to display the amount of time passed. For example, instead of **item was added 37 seconds ago** this component would render **item was added just now**. See **Outputs** section below for further information.

## Install

    npm i -S react-since

## Use

    import Since from 'react-since'

`react-since` requires a `date` prop and returns a `<span></span>` containing the approximate time since that date.

    <Since date={'2019-05-24 10:30:00.000Z'} />

## Live Prop
The component by default is live meaning that dates will auto-update every sixty seconds. You can override this feature by passing a `live` prop like this:

    <Since date={'2019-05-24 10:30:00.000Z'} live={false} />

## Outputs
`react-since` outputs are designed to be human-friendly. The thinking is that users typically want to know a rough idea of how long ago an event took place and aren't concerned with highly accurate timings. See the table below for example outputs.

| Time Difference  | Output             |
| ---------------- | ------------------ |
| 30 seconds       | "just now"         |
| 32 minutes       | "30 minutes ago"   |
| 70 minutes       | "an hour ago"      |
|  3 hours         | "a few hours ago"  |

`react-since` also handles time differences for weeks, months and years.
