import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

type SkillCardProps = {
  title?: string
  description?: string
  color?: string
}

export default function SkillCard({
  title = 'Skill',
  description = 'Description',
  color = '#2563eb',
}: SkillCardProps) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
      <Card
        sx={{
          minWidth: 280,
          maxWidth: 400,
          borderLeft: 6,
          borderColor: color,
          boxShadow: 4,
          bgcolor: 'background.paper',
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}


