import React from "react";
import Icon from "./Icon";

export default ({ icons, query }) => {
  const { matched, notMatched } = partitionIcons(icons, query);
  if (notMatched.length > 0) {
    return <Matches matched={matched} notMatched={notMatched} />;
  } else if (matched.length === 0) {
    return <NoMatches icons={icons} query={query} />;
  } else {
    return <NoQuery icons={icons} />;
  }
};

function Matches({ matched, notMatched }) {
  return (
    <React.Fragment>
      <h2>Probably one of these</h2>
      <Icons icons={matched} />

      <h2>Probably not one of these</h2>
      <Icons icons={notMatched} />
    </React.Fragment>
  );
}

function NoMatches({ icons, query }) {
  return (
    <React.Fragment>
      <h2>{`No matches for "${query}"`}</h2>
      <Icons icons={icons} />
    </React.Fragment>
  );
}

function NoQuery({ icons }) {
  return <Icons icons={icons} />;
}

function Icons({ icons }) {
  return <div>{icons.map(src => <Icon src={src} key={src} />)}</div>;
}

function partitionIcons(icons, query) {
  const matched = [];
  const notMatched = [];

  for (const icon of icons) {
    if (icon.includes(query)) {
      matched.push(icon);
    } else {
      notMatched.push(icon);
    }
  }

  return { matched, notMatched };
}
