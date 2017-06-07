# React-since
A React "time-ago" component for those needing "humanistic" outputs rather than "to-the-second" accuracy. For example, instead of **item was added 37 seconds ago** this component would render **item was added just now**. See **Outputs** section below for further information. This package is very small and comes without any of the bloat that you may find in similar packages.

## Install

    npm i -S react-since

## Use

    import Since from 'react-since'

React-since requires a `date` prop and returns a `<span></span>` containing the approximate time since that date.

    <Since date="Jan 10, 2017" />

## Live Mode
The component by default is live meaning that dates will auto-update every sixty seconds. You can override this feature by passing a `live` prop like this:

    <Since date="Jan 10, 2017" live={false} />

## Outputs
The component's outputs are designed to be human-friendly. The thinking is that users typically want to know a rough idea of how long ago an event took place and aren't concerned with highly accurate timings. See the table below for example outputs.

| Time Difference  | Output             |
| ---------------- | ------------------ |
| 30 seconds       | "just now"         |
| 32 minutes       | "30 minutes ago"   |
| 70 minutes       | "an hour ago"      |
|  3 hours         | "a few hours ago"  |

`react-since` also handles time differences for weeks, months and years.

## Finally
Testing is required - any volunteers?

Contributions are welcome - please fork and issue PR.

New features on their way...
