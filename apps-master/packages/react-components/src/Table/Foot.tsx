// Copyright 2017-2023 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { styled } from '../styled.js';

interface Props {
  className?: string;
  footer?: React.ReactNode;
  isEmpty: boolean;
}

function Foot ({ className = '', footer, isEmpty }: Props): React.ReactElement<Props> | null {
  if (!footer || isEmpty) {
    return null;
  }

  return (
    <StyledTfoot className={`${className} ui--Table-Foot`}>
      {footer}
    </StyledTfoot>
  );
}

const StyledTfoot = styled.tfoot`
  td {
    color: linear-gradient(to bottom,#26294a,#1a1c2c);
    font: var(--font-sans);
    font-weight: var(--font-weight-normal);
    padding: 0.75rem 1rem 0.25rem;
    text-align: right;
    vertical-align: baseline;
    white-space: nowrap;
  }

  tr {
    background: linear-gradient(to bottom,#26294a,#1a1c2c);
  }
`;

export default React.memo(Foot);
