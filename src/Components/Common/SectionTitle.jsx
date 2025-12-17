import parse from 'html-react-parser';
import { Flame } from 'lucide-react';

const SectionTitle = ({Title,SubTitle}) => {
    return (
        <div>
          <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
          {parse(SubTitle)} <Flame size={18} className="d-inline" style={{ color: 'var(--primary)' }} />
          </div>
          <h2 className="title wow fadeInUp" data-wow-delay=".4s">{parse(Title)}</h2>
        </div>
    );
};

export default SectionTitle;