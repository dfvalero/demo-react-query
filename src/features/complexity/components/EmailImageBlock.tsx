import { Box } from '@mui/material';
import type { EmailImageBlock as Data } from '../types/email';
import Link from '@mui/material/Link';

type EmailImageBlockProps = {
    data: Data;
};

const EmailImageBlock = ({ data }: EmailImageBlockProps) => {
    const { image, link, altText = '' } = data;

    if (link === undefined) {
        return (
            <Box sx={{ mb: 2 }}>
                <img src={image} width={100} height={100} alt={altText} />
            </Box>
        );
    }

    return (
        <Box sx={{ mb: 2 }}>
            <Link href={link}>
                <img src={image} width={100} height={100} alt={altText} />
            </Link>
        </Box>
    );
};

export default EmailImageBlock;
