import React, { useState } from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import Card from 'components/Card';
import { getOee } from 'api';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const [cards, setCards] = useState<any>();

  React.useEffect(() => {
    getOee(options.cardsUrl).then((response) => setCards(response.data?.data || []));
  }, [options.cardsUrl, data.series]);

  return (
    <div
      className={cx(
        css`
          position: relative;
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <div
        className={cx(css`
          display: flex;
          flex-wrap: wrap;
        `)}
      >
        {cards?.length > 0 && cards.map((item: any, index: number) => <Card key={index} data={item} />)}
      </div>
    </div>
  );
};
